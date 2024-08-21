/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = reverse(data);
  postMessage(response);
});

function reverse(string: string): string {
  return string.length === 0 ? '' : reverse(string.substring(1)) + string[0];
}
