import React, { useState } from "react"
import { Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap"
import SnackOrBoozeApi from "./Api"

function FoodForm() {

    const initialState = {
        type: "snacks",
        id: "",
        name: "",
        description: "",
        recipe: "",
        serve: ""
    }

    const [food, setfood] = useState(initialState)

    function handleChange(e) {
        e.persist()
        setfood(food => {
            return {
                ...food,
                [e.target.name]: e.target.value
            }

        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        SnackOrBoozeApi.addItem(food)
        setfood(initialState)
    }

    return (
        <div>
            <Card>
                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="food-type">Food Type</Label>
                            <Input id="food-type" name="type" type="select" onChange={handleChange} required>
                                <option value="snacks">Snack</option>
                                <option value="drinks">Drink</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="food-id">ID</Label>
                            <Input id="food-id" name="id" type="text" onChange={handleChange} value={food.id} required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="food-name">Name</Label>
                            <Input id="food-name" name="name" type="text" onChange={handleChange} value={food.name} required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="food-description">Description</Label>
                            <Input id="food-description" name="description" type="textarea" value={food.description} onChange={handleChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="food-recipe">Recipe</Label>
                            <Input id="food-recipe" name="recipe" type="textarea" onChange={handleChange} value={food.recipe} required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="food-serve">Serve</Label>
                            <Input id="food-serve" name="serve" type="textarea" onChange={handleChange} value={food.serve} required />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </CardBody>

            </Card>
        </div>
    )
}

export default FoodForm