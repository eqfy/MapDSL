import { OutputStatement } from './OutputStatement';

function handleMapOutputStatements() {
  const xhr = new XMLHttpRequest();
  const url = '/';
  xhr.open('GET', url, false);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      const listOfOutputStatements = JSON.parse(xhr.response).result;
      return renderMap(listOfOutputStatements);
    } else {
      const err = JSON.parse(xhr.response).error;
      return renderMap(err);
    }
  };
}

function renderMap(outputStatements: OutputStatement[]) {
  for (const statement of outputStatements) {
    const para = document.createElement('p');
    const node = document.createTextNode(JSON.stringify(statement));
    para.appendChild(node);
    document.body.appendChild(para);
  }
}
