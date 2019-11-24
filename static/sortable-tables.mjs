function onLoad() {
  const sortableTables = document.querySelectorAll("table.sortable");
  for (const table of sortableTables) {
    enableTableSorting(table);
  }
}

function enableTableSorting(tableElem) {
  for (const thElem of tableElem.querySelectorAll("th")) {
    const buttonElem = document.createElement("button");
    buttonElem.type = "button";
    buttonElem.addEventListener("click", () => toggleSort(tableElem, thElem), {passive: true});
    for (const thChild of thElem.childNodes) {
      buttonElem.appendChild(thChild);
    }
    thElem.appendChild(buttonElem);
    thElem.classList.add("sort");
  }
}

function toggleSort(tableElem, thElem) {
  const oldOrder = getSortOrder(thElem);
  const nextOrder = (oldOrder === undefined || oldOrder === "descending")
    ? "ascending"
    : "descending";
  setSortOrder(thElem, nextOrder);
  let index;
  for (const [i, curThElem] of tableElem.querySelectorAll("th").entries()) {
    if (curThElem === thElem) {
      index = i;
    } else {
      setSortOrder(curThElem, undefined);
    }
  }
  if (index === undefined) {
    return;
  }
  sortTable(tableElem, index, nextOrder === "ascending");
}

function getSortOrder(thElem) {
  if (thElem.classList.contains("sort-asc")) {
    return "ascending";
  } else if(thElem.classList.contains("sort-desc")) {
    return "descending";
  } else {
    return undefined;
  }
}

function setSortOrder(thElem, order) {
  if (order === "ascending") {
    thElem.classList.add("sort-asc");
    thElem.classList.remove("sort-desc");
  } else if (order === "descending") {
    thElem.classList.remove("sort-asc");
    thElem.classList.add("sort-desc");
  } else {
    // `undefined`
    thElem.classList.remove("sort-asc");
    thElem.classList.remove("sort-desc");
  }
}

function sortTable(tableElem, columnIndex, ascending) {
  const tbodyElem = tableElem.querySelector("tbody");
  if (tbodyElem === null) {
    return;
  }
  let isAllDecimal = true;
  const rows = [];
  for (const child of tbodyElem.children) {
    if (child.tagName.toLowerCase() !== "tr") {
      continue;
    }
    rows.push(child);
    if (isAllDecimal) {
      const tdElem = child.querySelectorAll("td")[columnIndex];
      if (tdElem !== undefined && !/^(?:0|[1-9]\d*)$/.test(tdElem.textContent.trim())) {
        isAllDecimal = false;
      }
    }
  }
  sortRows(rows, columnIndex, isAllDecimal ? compareDecimal : compareText);
  if (!ascending) {
    rows.reverse();
  }
  tbodyElem.append(...rows);
}

function sortRows(rows, columnIndex, comparator) {
  rows.sort((left, right) => {
    const leftTdElem = left.querySelectorAll("td")[columnIndex];
    const rightTdElem = right.querySelectorAll("td")[columnIndex];
    if (!leftTdElem || !rightTdElem) {
      if (!leftTdElem && !rightTdElem) {
        return 0;
      } else {
        return !leftTdElem ? -1 : 1;
      }
    }
    const leftText = leftTdElem.textContent.trim();
    const rightText = rightTdElem.textContent.trim();
    return comparator(leftText, rightText);
  });
}

function compareText(leftStr, rightStr) {
  if (leftStr === rightStr) {
    return 0;
  } else {
    return leftStr < rightStr ? -1 : 1;
  }
}

function compareDecimal(leftStr, rightStr) {
  if (leftStr === rightStr) {
    return 0;
  } else {
    const leftValue = parseInt(leftStr, 10);
    const rightValue = parseInt(rightStr, 10);
    return leftValue < rightValue ? -1 : 1;
  }
}

// See: https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
switch (document.readyState) {
  case "loading":
    // https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
    document.addEventListener("DOMContentLoaded", () => onLoad(), false);
    break;
  case "interactive":
  case "complete":
    onLoad();
    break;
}
