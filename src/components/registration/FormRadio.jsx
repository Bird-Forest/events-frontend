import { useField } from 'formik';
import React from 'react';
import { ErrorMessage, RadioWrap } from './Register.styled';

// export default function FormRadio({ label, ...props }) {
//   const [field, meta] = useField({ ...props, type: 'radio' });
//   const errorClass = meta.touched && meta.error ? 'error' : '';
//   return (
//     <RadioWrap>
//       <div id="radio-group" className="radio-title">
//         Where did your hear about this event
//       </div>
//       <div role="group" aria-labelledby="radio-group" className="radio-group">
//         <label
//           htmlFor="picked"
//           //   className="lable-picked"
//           className={`label-picked ${errorClass}`}
//         >
//           Social media
//           <input
//             type="radio"
//             name="picked"
//             value="Social media"
//             {...field}
//             {...props}
//             // className="input-picked"
//             className={`input-input ${errorClass}`}
//           />
//         </label>
//         {meta.touched && meta.error ? (
//           <ErrorMessage>{meta.error}</ErrorMessage>
//         ) : null}
//         <label
//           htmlFor="picked"
//           //   className="lable-picked"
//           className={`label-picked ${errorClass}`}
//         >
//           Friends
//           <input
//             type="radio"
//             name="picked"
//             value="Friends"
//             {...field}
//             {...props}
//             // className="input-picked"
//             className={`input-input ${errorClass}`}
//           />
//         </label>
//         {meta.touched && meta.error ? (
//           <ErrorMessage>{meta.error}</ErrorMessage>
//         ) : null}
//         <label
//           htmlFor="picked"
//           //   className="lable-picked"
//           className={`label-picked ${errorClass}`}
//         >
//           Found myself
//           <input
//             type="radio"
//             name="picked"
//             value="Found myself"
//             {...field}
//             {...props}
//             // className="input-picked"
//             className={`input-input ${errorClass}`}
//           />
//         </label>
//         {meta.touched && meta.error ? (
//           <ErrorMessage>{meta.error}</ErrorMessage>
//         ) : null}
//       </div>
//     </RadioWrap>
//   );
// }
export default function FormRadio({ name, options }) {
  const [field, meta] = useField(name);
  const errorClass = meta.touched && meta.error ? 'error' : '';

  return (
    <RadioWrap>
      {options.map(option => (
        <label key={option.value} className={`label-picked ${errorClass}`}>
          <input
            type="radio"
            {...field}
            value={option.value}
            checked={field.value === option.value}
            className={`input-input ${errorClass}`}
            // className="input-picked"
          />
          {option.label}
        </label>
      ))}
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </RadioWrap>
  );
}
// {meta.touched && meta.error ? (
// <ErrorMessage>{meta.error}</ErrorMessage>) : null}
