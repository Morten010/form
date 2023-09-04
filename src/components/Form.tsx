import React from 'react'
import { useForm } from 'react-hook-form';
import type {FieldValues} from "react-hook-form"
import FormError from './FormError';
import { Input } from './Input';
import { Textarea } from './TextArea';

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues,
    } = useForm()

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    }

    
    
  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className='flex flex-col lg:flex-row gap-8'
    >
       <div
       className='flex flex-col lg:w-2/4'
       >
            <label>
                <span>Full name</span>
                <Input 
                {
                    ...register("fullName" , {
                        required: "Full name is required"
                    })
                }
                type="text" 
                placeholder='George Washington'
                />
                <FormError error={errors.fullName} />
            </label>
            <label>
                <span>Phone number</span>
                <Input 
                {
                    ...register("phoneNumber", {
                        required: "Phone number is required",
                        minLength: {
                            value: 8,
                            message: "Must be a valid phone number"
                        }
                    })
                }
                type="number" 
                placeholder='+45 26262626'
                />       
                <FormError error={errors.phoneNumber} />
            </label>
            <label>
                <span>Email</span>
                <Input 
                {
                    ...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: regex,
                            message: "Must provide a valid email"
                        }
                    })
                }
                type="text" 
                placeholder='name@email.com'
                />
                <FormError error={errors.email} />
            </label>
            <label>
                <span>Comment</span>
                <Textarea 
                rows={5}
                {
                    ...register("comment", {
                        required: "Comment is required",
                        minLength: {
                            value: 20,
                            message: "Comment must be atleast 20 characters long"
                        },
                        maxLength: {
                            value: 200,
                            message: "Comment must be atleast 200 characters long"
                        }
                    })
                }
                placeholder='message here...'
                />
                <FormError error={errors.comment} />
            </label>

            <label>
                <span>preferred method of contact</span>
                <select 
                className='flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                {...register("preferred", {
                    required: "Preferred method of contact is required"
                })}>
                    <option value="email">Email</option>
                    <option value="phoneNumber">Phone number</option>
                </select>
                <FormError error={errors.preferred} />
            </label>

           <div
           className='flex gap-2'
           >
                <button
                className='px-4 py-2 bg-blue-700 text-white font-bold rounded-md hover:opacity-75 transition-opacity mt-4'
                disabled={isSubmitting}
                >
                    Submit
                </button>
                <button
                className='px-4 py-2 border border-blue-700 text-blue-700 font-bold rounded-md hover:opacity-75 transition-opacity mt-4'
                type='button'
                disabled={isSubmitting}
                onClick={() => reset()}
                >
                    Reset
                </button>
           </div>

        </div>

        <div>
            <h2
            className='text-xl font-semibold'
            >
                Details sent: 
            </h2>
            <p>
                Full name: {getValues("fullName")}
            </p>
            <p>
                Phone number: {getValues("phoneNumber")}
            </p>
            <p>
                Email: {getValues("email")}
            </p>
            <p>
                Comment: {getValues("comment")}
            </p>
            <p>
                Preferred: {getValues("preferred")}
            </p>
        </div>

    </form>
  )
}
