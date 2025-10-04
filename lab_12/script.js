class Sudoku {
  constructor() {
    this.field = Array.from({ length: 9 }, () =>
      Array.from({ length: 9 }, () => null)
    );
  }

  createField() {
    const fieldEl = document.createElement("div");
    fieldEl.className = "field";

    this.field.forEach((sector, bigIndex) => {
      const bigSector = document.createElement("div");
      bigSector.className = "big_sector";
      bigSector.dataset.index = String(bigIndex);

      sector.forEach((_, index) => {
        const smallSector = document.createElement("div");
        smallSector.className = "small_sector";
        smallSector.dataset.index = `${bigIndex}_${index}`;
        bigSector.append(smallSector);
      });

      fieldEl.append(bigSector);
    });

    return fieldEl;
  }

  render() {
    const gamefield = this.createField()
    const gameWrapper = document.createElement("div");
    gameWrapper.className = "field_wrapper"
    gameWrapper.append(gamefield)

    const clearButton = document.createElement("button");
    clearButton.className = "button clear"
    clearButton.textContent = "Очистить"
    clearButton.onclick = ()=>this.clear();
    
    const checkButton = document.createElement("button");
    checkButton.className = "button check"
    checkButton.textContent = "Проверить"
    checkButton.onclick = ()=>console.log(this.check());
    
    document.body.append(gameWrapper);
    document.body.append(clearButton);
    document.body.append(checkButton);
  }

  clear() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.field[i][j] = null;
      }
    }

    const smallSectors = document.querySelectorAll(".small_sector");
    smallSectors.forEach((sector) => sector.textContent = "");
  }

 writeNumber(number, target) {
  const [bigIndex, smallIndex] = target;

  const place = document.querySelector(
    `[data-index="${bigIndex}_${smallIndex}"]`
  );

  if (!place) return;

  let numEl = place.querySelector("span");
  if (numEl) {
    numEl.textContent = number;
  } else {
    numEl = document.createElement("span");
    numEl.textContent = number;
    place.append(numEl);
  }

  this.field[bigIndex][smallIndex] = number;
}

  check() {
    const blocks = this.field;
    const errors = [];

    for (let b = 0; b < 9; b++) {
      const seen = new Map();
      for (let s = 0; s < 9; s++) {
        const val = blocks[b][s];
        if (!val) continue;
        if (seen.has(val)) {
          errors.push([b, s], [b, seen.get(val)]);
        } else {
          seen.set(val, s);
        }
      }
    }

    for (let row = 0; row < 9; row++) {
      const seen = new Map();
      for (let bRow = 0; bRow < 3; bRow++) {
        for (let bCol = 0; bCol < 3; bCol++) {
          const bigIndex = Math.floor(row / 3) * 3 + bCol;
          const smallIndex = (row % 3) * 3 + bRow;
          const val = blocks[bigIndex][smallIndex];
          if (!val) continue;
          if (seen.has(val)) {
            errors.push([bigIndex, smallIndex], seen.get(val));
          } else {
            seen.set(val, [bigIndex, smallIndex]);
          }
        }
      }
    }

    for (let col = 0; col < 9; col++) {
      const seen = new Map();
      for (let bCol = 0; bCol < 3; bCol++) {
        for (let bRow = 0; bRow < 3; bRow++) {
          const bigIndex = Math.floor(col / 3) + bCol * 3;
          const smallIndex = bRow * 3 + (col % 3);
          const val = blocks[bigIndex][smallIndex];
          if (!val) continue;
          if (seen.has(val)) {
            errors.push([bigIndex, smallIndex], seen.get(val));
          } else {
            seen.set(val, [bigIndex, smallIndex]);
          }
        }
      }
    }

    if (errors.length > 0) {
      return { valid: false, errors };
    } else {
      return { valid: true, errors: [] };
    }
  }
}

const s = new Sudoku();
s.render();
