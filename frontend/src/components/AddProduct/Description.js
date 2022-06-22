import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {v4 as uuidv4} from 'uuid';

const Description = () => {

    //Zdjęcie
    const [selectedImage, setSelectedImage] = useState([]);

    const onSelectImage = (event) => {
        const selectedFile = event.target.files;
        const selectedFileArray = Array.from(selectedFile);

        const imageArray = selectedFileArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImage((previousImage) => previousImage.concat(imageArray));

        // FOR BUG IN CHROME
        event.target.value = "";
    };

    function deleteHandlerImage(image) {
        setSelectedImage(selectedImage.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    }

    // Powielanie
    const [inputFields, setInputFields] = useState([
        {id: uuidv4(), title: '', content: ''},
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    };

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.title] = event.target.value
            }
            return i;
        })
        setInputFields(newInputFields);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, {id: uuidv4(), title: '', content: ''}])
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    return (
        <div className="font-[Roboto] mt-8">
            <form onSubmit={handleSubmit}>
                {
                    inputFields.map(inputField => (
                        <div key={inputField.id}>
                            <div className="mt-6">
                                <h1 className="text-xl font-bold inline">Opis produktu</h1>
                                <IconButton disabled={inputFields.length === 1}
                                            onClick={() => handleRemoveFields(inputField.id)}>
                                    <RemoveIcon/>
                                </IconButton>
                                <IconButton
                                    onClick={handleAddFields}
                                >
                                    <AddIcon/>
                                </IconButton>
                            </div>
                            <div className="mt-4">
                                <label
                                    className="cursor-pointer bg-black hover:bg-white hover:text-black text-white border-2 border-transparent hover:border-black px-6 py-2 font-normal">
                                    <input
                                        className="hidden"
                                        type="file"
                                        name="images"
                                        onChange={onSelectImage}
                                        multiple
                                        accept="image/png , image/jpeg, image/webp"
                                    />
                                    WYBIERZ ZDJĘCIE
                                </label>
                                {selectedImage.length > 0 &&
                                    (selectedImage.length > 1 ? (
                                        <p className="text-red-600 font-normal mt-2">
                                            Nie możesz dodać więcej niż 1 zdjęcie!
                                        </p>
                                    ) : (
                                        <button
                                            className="cursor-pointer inline-block "
                                            onClick={() => {
                                                console.log(selectedImage);
                                            }}
                                        />
                                    ))}
                                <div className="images">
                                    {selectedImage &&
                                        selectedImage.map((image, index) => {
                                            return (
                                                <div key={image}>
                                                    <img src={image} className="h-52 w-52 mt-4" alt="upload"/>
                                                    <button onClick={() => deleteHandlerImage(image)}
                                                            className="ml-8 mt-4 hover:bg-black hover:text-white border-2 hover:border-transparent border-black px-3 py-1 font-normal">
                                                        USUŃ ZDJĘCIE
                                                    </button>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                            <div className="w-1/2 mt-6">
                                <h2 className="font-light mb-1">Tytuł</h2>
                                <input className="w-full h-10 border-2 pl-2"
                                       type="text"
                                       name="title"
                                       value={inputField.title}
                                       onChange={event => handleChangeInput(inputField.id, event)}
                                />
                            </div>
                            <div className="w-1/2 mt-2">
                                <h2 className="font-light mb-1">Opis</h2>
                                <input className="w-full h-10 border-2 pl-2"
                                       type="text"
                                       name="content"
                                       value={inputField.content}
                                       onChange={event => handleChangeInput(inputField.id, event)}
                                />
                            </div>
                        </div>
                    ))
                }
            </form>
        </div>
    );
};

export default Description;
