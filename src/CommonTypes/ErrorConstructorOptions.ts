export interface ErrorOptions<ErrorMessageProps> {
    name?: string;
    generateMessage?: (props: ErrorMessageProps) => string;
}
