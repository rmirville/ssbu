/**
 *
 *
 * @export
 * @interface StageClassifications
 */
export interface StageClassifications {
  gameName: string;
  series: string;
  tourneyPresence: number;
}

export function isStageClassifications(classes: any): classes is StageClassifications {
  return ((typeof classes.gameName === 'string')
    && (typeof classes.series === 'string')
    && (typeof classes.tourneyPresence === 'number')
  );
}
