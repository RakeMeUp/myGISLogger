function Input(props: any) {

    const {label, onChange, id, ...rest} = props;

    return (
        <label>
            <span>{label}</span>
            <input {...rest} onChange={onChange} id={id}/>
        </label>
    )
}

export default Input