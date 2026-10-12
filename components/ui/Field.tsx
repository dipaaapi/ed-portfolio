import { ComponentPropsWithoutRef, ReactNode, useId } from 'react'
import { cn } from './cn'

type Tone = 'dark' | 'light';

const control = (tone: Tone) => cn(
    'w-full rounded-xl p-4 outline-none transition-all focus:ring-2 focus:ring-red-500',
    tone === 'dark' ? 'bg-gray-800 text-white placeholder-gray-500 border-none' : 'bg-white text-gray-900 placeholder-gray-400 border border-gray-200',
);

type FieldWrapperProps = { label: string; id: string; hint?: ReactNode; className?: string; children: ReactNode };

const FieldWrapper = ({ label, id, hint, className, children }: FieldWrapperProps) => (
    <div className={cn('flex flex-col', className)}>
        <label htmlFor={id} className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">{label}</label>
        {children}
        {hint && <span className="mt-1.5 text-[11px] text-gray-400">{hint}</span>}
    </div>
);

type BaseFieldProps = { label: string; hint?: ReactNode; tone?: Tone; wrapperClassName?: string };

export const Input = ({ label, hint, tone = 'dark', wrapperClassName, className, id, ...rest }: BaseFieldProps & ComponentPropsWithoutRef<'input'>) => {
    const autoId = useId();
    const fieldId = id ?? autoId;
    return (
        <FieldWrapper label={label} id={fieldId} hint={hint} className={wrapperClassName}>
            <input id={fieldId} className={cn(control(tone), className)} {...rest} />
        </FieldWrapper>
    );
};

export const Textarea = ({ label, hint, tone = 'dark', wrapperClassName, className, id, ...rest }: BaseFieldProps & ComponentPropsWithoutRef<'textarea'>) => {
    const autoId = useId();
    const fieldId = id ?? autoId;
    return (
        <FieldWrapper label={label} id={fieldId} hint={hint} className={wrapperClassName}>
            <textarea id={fieldId} className={cn(control(tone), 'rounded-2xl', className)} {...rest} />
        </FieldWrapper>
    );
};

type SelectProps = BaseFieldProps & ComponentPropsWithoutRef<'select'> & { options: (string | { value: string; label: string })[] };

// Native select styled like the inputs, with a custom chevron.
export const Select = ({ label, hint, tone = 'dark', wrapperClassName, className, id, options, ...rest }: SelectProps) => {
    const autoId = useId();
    const fieldId = id ?? autoId;
    return (
        <FieldWrapper label={label} id={fieldId} hint={hint} className={wrapperClassName}>
            <div className="relative">
                <select id={fieldId} className={cn(control(tone), 'appearance-none pr-10 cursor-pointer', className)} {...rest}>
                    {options.map((o) => {
                        const opt = typeof o === 'string' ? { value: o, label: o } : o;
                        return <option key={opt.value} value={opt.value}>{opt.label}</option>;
                    })}
                </select>
                <svg className={cn('pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4', tone === 'dark' ? 'text-gray-400' : 'text-gray-500')} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
            </div>
        </FieldWrapper>
    );
};
