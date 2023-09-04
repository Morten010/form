import React from 'react'
import type {FieldError, FieldErrorsImpl,  Merge} from "react-hook-form"

type FormErrorProps = {
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

export default function FormError({error}: FormErrorProps) {
    console.log(error);
    
  return (
    <>
        {error && (
            <p
            className='text-red-600'
            >
                {error.message?.toString()}
            </p>
        )}
    </>
  )
}
