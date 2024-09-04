import type {RenderableProps} from 'preact';
import {HElement} from './h-element';
import {type Signal, signal, batch} from '../signals';
import type {HElementProps} from '../types';

export class HElementSignals<P extends HElementProps, S = {}, SIGNALS = {readonly [K in keyof S]-?: Signal<S[K]>}> extends HElement<P, S> {
    static HElementSignals = true;

    protected declare singals: SIGNALS;

    constructor(props: P) {
        super(props);

        this.singals = {} as SIGNALS;
        const {state} = this;
        this.changeState(state);
        this.state = {} as S;
    }

    changeState(state: Partial<S> | ((prevState: Readonly<S>) => Partial<S>), callback?: () => void): Promise<S> {
        batch(() => {
            if (typeof state === 'function') {
                state = state(this.state);
            }
            for (const key in state) {
                const sg = this.singals[key as unknown as keyof SIGNALS] as Signal;
                if (sg) {
                    sg.value = state[key as keyof S];
                } else {
                    this.singals[key as unknown as keyof SIGNALS] = signal(state[key as keyof S]) as SIGNALS[keyof SIGNALS];
                }
            }
            callback?.();
        });
        return Promise.resolve({} as S);
    }

    resetState(props?: RenderableProps<P>) {
        this.changeState(this.getDefaultState(props));
    }
}
