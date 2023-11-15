import type {IconType} from '@zui/core';
import type {PickOptions} from '@zui/pick';

export interface TimePickerOptions extends PickOptions {
    minuteStep?: number;
    placeholder?: string;
    readonly?: boolean;
    format?: string;
    icon?: IconType | boolean;
    required?: boolean;
    onInvalid?: (value: string) => void;
}
