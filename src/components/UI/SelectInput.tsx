import { useField } from "formik"

const SelectInput: React.FC<{
    id: string,
    name: string,        
    label?: string,    
}> = (props) => {

    const [fieldProps, metadata] = useField({name: props.name})

    return (
        <div className="mb-5 text-left">
            {props.label && (
                <>
                    <label htmlFor={props.id || props.name} className="mb-2 inline-block">
                        {props.label}
                    </label>
                    <br />
                </>
            )}
            <select
            className="w-full border-0 border-b-2 border-gray-300 focus:outline-none"
                {...fieldProps}
                {...props} />
            {metadata.error && metadata.touched ? (
                <p className="text-sm font-thin text-red-500">
                    {metadata.error}
                </p>
            ) : null}
        </div>
    )
}

export default SelectInput