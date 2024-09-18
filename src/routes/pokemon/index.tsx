import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Field, FieldProps, Form, Formik } from "formik";
import { Container, Input, FormControl, Button, FormErrorMessage, Center, Flex, Box } from "@chakra-ui/react";

export const Route = createFileRoute('/pokemon/')({
  component: Pokemon
})


function Pokemon() {
  const navigate = useNavigate()
  function validateSearch(value: string) {
    let error;
    if (value === "") {
      error = "This field is required";
    }
    return error;
  }

  interface MyFormValues {
    search: string
  }
  const initialValues: MyFormValues = { search: "" };

  return (
    <Container borderColor="gray.200" maxW="container.lg"  >
      <Center h={"800px"}  >
        <Flex>
          <Box w={"500px"} >
            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  navigate({ to: `/pokemon/${values.search}` })
                  actions.setSubmitting(false);
                }, 1000)
              }}
            >
              {(props) => (
                <Form >
                  <Flex>
                    <Field name="search" validate={validateSearch} >
                      {({ field, form }: FieldProps) => (
                        <FormControl isInvalid={!!form.errors.search} >

                          <Input {...field} placeholder="search" />
                          <FormErrorMessage>{form.errors.search?.toString()}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      ml={4}
                      py={2}
                      colorScheme="teal" variant='outline' width='200px'
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      let's find pokemon
                    </Button>
                  </Flex>

                </Form>
              )}
            </Formik>
          </Box>
        </Flex>
      </Center>
    </Container>
  );
}