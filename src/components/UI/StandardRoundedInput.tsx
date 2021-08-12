import { useField } from "formik"

const StandardRoundedInput: React.FC<{
    id: string,
    name: string,
    type: string,
    placeholder?: string,
    label?: string,
    className?: string
}> = (props) => {
    const [fieldProps, metadata] = useField({ name: props.name })

    return (
        <div className="mb-5">
            {props.label && (
                <>
                    <label htmlFor={props.name}>
                        {props.label}
                    </label>
                    <br />
                </>
            )}
            <input
                className={`rounded-sm border-gray-300 bg-gray-200 ${props.className}`}
                {...fieldProps}
                id={props.id}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder} />
            {(metadata.error && metadata.touched) ? (
                <p className="text-sm font-thin text-red-500">
                    {metadata.error}
                </p>
            ) : null}
        </div>
    )
}

export default StandardRoundedInput