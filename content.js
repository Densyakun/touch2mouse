document.addEventListener("touchstart", onTouch, { passive: false });
document.addEventListener("touchend", onTouch, { passive: false });
document.addEventListener("touchcancel", onTouch, { passive: false });
document.addEventListener("touchmove", onTouch, { passive: false });

function onTouch(evt) {
  evt.preventDefault();
  if (evt.touches.length > 1 || (evt.type == "touchend" && evt.touches.length > 0))
    return;

  var type = null;
  switch (evt.type) {
    case "touchstart":
      type = "mousedown";
      break;
    case "touchmove":
      type = "mousemove";
      break;
    default:
      type = "mouseup";
      break;
  }

  evt.changedTouches[0].target.dispatchEvent(new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: evt.changedTouches[0].clientX,
    clientY: evt.changedTouches[0].clientY,
    screenX: evt.changedTouches[0].screenX,
    screenY: evt.changedTouches[0].screenY
  }));
}