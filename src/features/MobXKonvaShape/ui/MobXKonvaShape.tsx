import { Reactive } from "shared/ui/Reactive";
import { KonvaShape, KonvaShapeProps } from "entities/KonvaShape";

export const MobXKonvaShape = Reactive((props: KonvaShapeProps) => {
  return <KonvaShape {...props} />;
});
