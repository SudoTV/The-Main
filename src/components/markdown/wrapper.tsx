/**
 * @author WMXPY
 * @namespace Component_Markdown
 * @description Wrapper
 */

export type MarkdownWrapperProps = {

    readonly children: React.ReactNode;
};

export const MarkdownWrapper: React.FC<MarkdownWrapperProps> = (props: MarkdownWrapperProps) => {

    return (<main
        className="p-6 mx-auto w-full max-w-screen-xl text-left rtl:text-right"
    >
        {props.children}
    </main>);
};
