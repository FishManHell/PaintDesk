import { Reactive } from "shared/ui/Reactive";
import { useStore } from "app/providers/MobXProvider";
import { MobXResizeContainer } from "features/MobXResizeContainer";
import { CanvasLayer } from "shared/ui/CanvasLayer";
import { MobXKonvaShape, useShapeDragHandlers } from "features/MobXKonvaShape";
import { useDrawingCanvasHandlers } from "../hooks/useDrawingCanvasHandlers";
import { useEffect } from "react";

export const DrawingCanvas = Reactive(() => {
  const { drawingStore, zoomStore } = useStore();
  const {
    onMouseUp,
    onMouseMove,
    onMouseDown,
    onWheelZoom,
    throttledDragMove,
  } = useDrawingCanvasHandlers();
  const {
    onMouseUp: onMouseShapeUp,
    onMouseDown: onMouseShapeDown,
    onDragEnd: onDragShapeEnd,
  } = useShapeDragHandlers();

  return (
    <MobXResizeContainer refreshMode="throttle" refreshRate={200}>
      {({ width, height, origWidth, origHeight }) => {
        useEffect(() => {
          if (width === 0 || height === 0) return;
          zoomStore.stageSize = { width, height, origWidth, origHeight };
        }, [width, height]);

        if (width === 0 || height === 0) return null;

        return (
          <CanvasLayer
            width={width}
            height={height}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onWheelZoom={onWheelZoom}
            throttledDragMove={throttledDragMove}
          >
            {drawingStore.shapes.map((shape) => (
              <MobXKonvaShape
                key={shape.id}
                shape={shape}
                onDragEnd={onDragShapeEnd}
                onMouseUp={onMouseShapeUp}
                onMouseDown={onMouseShapeDown}
              />
            ))}
          </CanvasLayer>
        );
      }}
    </MobXResizeContainer>
  );
});
