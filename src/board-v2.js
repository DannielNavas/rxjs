import { fromEvent, map, mergeAll } from "rxjs";

const canvas = document.getElementById("reactive-canvas");

const cursorPosition = { x: 0, y: 0 };

const updateCursorPosition = (event) => {
  cursorPosition.x = event.clientX - canvas.offsetLeft;
  cursorPosition.y = event.clientY - canvas.offsetTop;
};

const onMouseDown$ = fromEvent(canvas, "mousedown");
onMouseDown$.subscribe(updateCursorPosition);
const onMouseMove$ = fromEvent(canvas, "mousemove");
const onMouseUp$ = fromEvent(canvas, "mouseup");

onMouseDown$.subscribe(updateCursorPosition);

const canvasContext = canvas.getContext("2d");
canvasContext.strokeStyle = "white";
canvasContext.lineWith = 8;

const paintStroke = (event) => {
  canvasContext.beginPath();
  canvasContext.moveTo(cursorPosition.x, cursorPosition.y);
  updateCursorPosition(event);
  canvasContext.lineTo(cursorPosition.x, cursorPosition.y);
  canvasContext.stroke();
  canvasContext.closePath();
};
const startPaint$ = onMouseDown$.pipe(
  map(() => onMouseMove$),
  mergeAll()
);

startPaint$.subscribe(paintStroke);
