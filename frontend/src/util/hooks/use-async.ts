import {DependencyList, useEffect, useState} from "react";

export interface AsyncReturnType<T> {
    isLoading: boolean,
    error: boolean,
    result: T | undefined,
}

/**
 * Execs an async operation, giving a loading state while it has not finished
 * @param asyncFn async func
 */
export const useAsync = <T>(asyncFn: Promise<T>): AsyncReturnType<T> => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [result, setResult] = useState<T>();
    useEffect(() => {
        const fn = async () => {
            setIsLoading(true);
            setError(false);
            try {
                const informacoes = await asyncFn;
                setIsLoading(false);
                setResult(informacoes)
            } catch (error) {
                    setError(true);
                    setIsLoading(false);
            }
        }
        fn();
    }, [setError,setIsLoading,setResult,asyncFn])

    return {isLoading, result, error}
}
