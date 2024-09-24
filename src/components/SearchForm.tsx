// components/SearchForm.tsx
import { Formik, Form, Field, FieldProps } from "formik";
import { Button, Flex, FormControl, Input, FormErrorMessage } from "@chakra-ui/react";
import { validateSearch } from "../utils/validateSearch";
import { useEffect, useRef } from "react";

interface SearchFormProps {
    onSubmit: (search: string) => void;
}

export const SearchForm = ({ onSubmit }: SearchFormProps) => {

    const inputRef: React.MutableRefObject<HTMLInputElement | undefined> = useRef()
    const initialValues = { search: "" };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    })
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                onSubmit(values.search);
            }}
        >
            {(props) => (
                <Form>
                    <Flex pt={4} direction={{ base: "column", xl: "row" }}>
                        <Field name="search" validate={validateSearch} >
                            {({ field, form }: FieldProps) => (
                                <FormControl isInvalid={!!form.errors.search}>
                                    <Input {...field} placeholder="Name pokemon!!" ref={inputRef} />
                                    <FormErrorMessage>{form.errors.search?.toString()}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            mt={{ base: 4, xl: 0 }}
                            ml={{ base: 0, xl: 4 }}

                            colorScheme="gray"
                            variant="outline"
                            width="200px"
                            isLoading={props.isSubmitting}
                            type="submit"
                        >
                            Let's find Pokémon
                        </Button>
                    </Flex>
                </Form>
            )}
        </Formik>
    );
};
