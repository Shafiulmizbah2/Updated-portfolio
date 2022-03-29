import React from "react";
import "../../styles/form.module.scss";

const Form = ({ children, ...restProps }) => {
  return (
    <form className="form" {...restProps}>
      {children}
    </form>
  );
};

Form.Group = ({ children, ...restProps }) => {
  return (
    <div className="form-group" {...restProps}>
      {children}
    </div>
  );
};

Form.Row = ({ children, ...restProps }) => {
  return (
    <div className="form-row" {...restProps}>
      {children}
    </div>
  );
};

Form.Title = ({ children, ...restProps }) => {
  return (
    <div className="form-title" {...restProps}>
      {children}
    </div>
  );
};

Form.Datalist = ({ children, id, ...restProps }) => {
  return (
    <datalist id={id} className="form-datalist" {...restProps}>
      {children}
    </datalist>
  );
};

Form.Option = ({ value, ...restProps }) => {
  return <option value={value} className="form-option" {...restProps} />;
};

Form.Text = ({ children, ...restProps }) => {
  return (
    <p className="form-text" {...restProps}>
      {children}
    </p>
  );
};

Form.Item = ({ children, ...restProps }) => {
  return (
    <div className="form-item" {...restProps}>
      {children}
    </div>
  );
};

Form.Label = ({ children, ...restProps }) => {
  return (
    <label className="form-label" {...restProps}>
      {children}
    </label>
  );
};

Form.Input = ({ ...restProps }) => {
  return <input className="form-input" {...restProps} />;
};

Form.Error = ({ children, ...restProps }) => {
  return (
    <p className="form-error" {...restProps}>
      {children}
    </p>
  );
};

Form.Button = ({ children, full, ...restProps }) => {
  return (
    <button
      className={`form-btn ${full ? "btn-full" : ""}`}
      {...restProps}
      type="submit"
    >
      {children}
    </button>
  );
};

Form.Footer = ({ children, full, ...restProps }) => {
  return (
    <div className="form-footer" {...restProps}>
      {children}
    </div>
  );
};

export default Form;
