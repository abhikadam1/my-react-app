import { useState } from "react";

function ArrayUpdateComponent() {
    const [foods, setFoods] = useState(['Apple', 'Coconut', 'Banana'])

    function handleRemoveFood(index) {
        setFoods(foods.filter((_,i) => i !== index));
    }
    function handleAddFood() {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';
        setFoods(f => [...f,newFood]);
    }
    return (<div>
        <h2>List of Foods</h2>
        <ul>
            {foods.map((food, index) =>
                <li
                    key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>
            )}
            <input type="text" id="foodInput" placeholder="Enter a Food"/>
            <button onClick={handleAddFood}>Add Food</button>
        </ul>
    </div>)
}

export default ArrayUpdateComponent;