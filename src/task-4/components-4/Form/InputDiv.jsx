const InputDiv = ({label, inputId, inputType = "text", movieValue}) => {
    return (
      <div className="flex flex-col space-y-1">
        <label htmlFor={inputId}>{label}</label>
        <input
          id={inputId}
          name={inputId}
          type={inputType}
          defaultValue={movieValue ?? movieValue}
          className="px-3 py-1 bg-gray-200 rounded-lg focus:outline-2 outline-orange-300"
          placeholder={label}
          required
        />
      </div>
    );
}

export default InputDiv;