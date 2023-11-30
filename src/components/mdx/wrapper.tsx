/**
 * @author WMXPY
 * @namespace Component_Mdx
 * @description Wrapper
 */

export type MDXWrapperProps = {

    readonly children: React.ReactNode;
};

export const MDXWrapper: React.FC<MDXWrapperProps> = (props: MDXWrapperProps) => {

    return (<main
        className="p-6 mx-auto w-full max-w-screen-xl text-left rtl:text-right"
    >
        {props.children}
    </main>);
};
