import { Reactive } from "shared/ui/Reactive";
import { KonvaShape, KonvaShapeProps } from "entities/KonvaShape";
import { FC } from "react";

export const MobXKonvaShape: FC<KonvaShapeProps> = Reactive(KonvaShape);
