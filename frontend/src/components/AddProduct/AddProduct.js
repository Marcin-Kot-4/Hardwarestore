import React, {useState, useRef} from 'react';
import ProfileNavigation from "../Profile/ProfileNavigation";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth.service";
import Description from "./Description";

const subCategories = [
    {
        value: 1,
        label: 'Dell',
    },
    {
        value: 2,
        label: 'HP',
    },
    {
        value: 3,
        label: 'Microsoft',
    },
    {
        value: 4,
        label: 'Inne',
    }
]

//dla wymaganych pól
const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const AddProduct = (props) => {
    // Do wybrania kategorii
    const [subCategory, setSubCategory] = React.useState(1);

    const handleChange = (event) => {
        setSubCategory(event.target.value);
    };

    // Walidacja danych do tabelki products (5 pierwszych inputów)
    const [name, setName] = useState("");
    const [pieces, setPieces] = useState("");
    const [price, setPrice] = useState("");
    const [details, setDetails] = useState("");
    const [otherDetails, setOtherDetails] = useState("");

    const onChangeName = (e) => {
        const name = e.target.value;
        setName(name);
    };
    const onChangePieces = (e) => {
        const pieces = e.target.value;
        setPieces(pieces);
    };
    const onChangePrice = (e) => {
        const price = e.target.value;
        setPrice(price);
    };
    const onChangeDetails = (e) => {
        const details = e.target.value;
        setDetails(details);
    };
    const onChangeOtherDetails = (e) => {
        const otherDetails = e.target.value;
        setOtherDetails(otherDetails);
    };

    //Do przycisku
    const form = useRef();
    const checkBtn = useRef();
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const handleAddProduct = (e) => {
        e.preventDefault();
        setMessage("");
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(name, pieces, price, details, otherDetails).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };

    // Miniaturka
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

    // Wiele zdjęć
    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));

        // FOR BUG IN CHROME
        event.target.value = "";
    };

    function deleteHandler(image) {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    }

    return (
        <div className="flex justify-center font-[Roboto] my-16">
            <div className="w-9/12">
                <div className="w-2/12 float-left mr-6">
                    <ProfileNavigation styleBold={props.styleBold}/>
                </div>
                <div
                    className="grid grid-container grid-cols-3 gap-4 w-9/12 float-left border-l-2 pl-12 border-gray-100">
                    <h1 className="text-2xl font-bold inline">Dodaj produkt</h1>

                    <div className="col-span-3 row-span-2 mt-4 float-left">
                        <h1 className="text-xl font-bold inline">Podstawowe dane</h1>
                        <Form onSubmit={handleAddProduct} ref={form}>
                            {!successful && (
                                <div>
                                    <h2 className="font-light mb-1">Kategoria</h2>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        value={subCategory}
                                        onChange={handleChange}
                                        className="w-1/3"
                                    >
                                        {subCategories.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <div>
                                        <h2 className="mt-8 font-light mb-2">Miniaturka</h2>
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
                                        <h2 className="font-light mb-1">Nazwa produktu</h2>
                                        <input className="w-full h-10 border-2 pl-2"
                                               type="text"
                                               name="name"
                                               value={name}
                                               onChange={onChangeName}
                                               validation={[required]}
                                        />
                                    </div>
                                    <div className="w-1/5 mt-4">
                                        <h2 className="font-light mb-1">Liczba produktów</h2>
                                        <input className="h-10 border-2 pl-2 w-full"
                                               type="text"
                                               name="pieces"
                                               value={pieces}
                                               onChange={onChangePieces}
                                               validation={[required]}
                                        />
                                    </div>
                                    <div className="w-1/5 mt-4">
                                        <h2 className="font-light mb-1">Cena (w zł)</h2>
                                        <input className="h-10 border-2 pl-2 w-full"
                                               type="text"
                                               name="price"
                                               value={price}
                                               onChange={onChangePrice}
                                               validation={[required]}
                                        />
                                    </div>
                                    <div className="mt-4 w-1/2">
                                        <h2 className="font-light mb-1">Szczegóły produktu</h2>
                                        <input className="w-full h-10 border-2 pl-2"
                                               type="text"
                                               name="details"
                                               value={details}
                                               onChange={onChangeDetails}
                                               validation={[required]}
                                        />
                                    </div>
                                    <div className="mt-4 w-1/2">
                                        <h2 className="font-light mb-1">Inne szczegóły produktu</h2>
                                        <input className="w-full h-10 border-2 pl-2"
                                               type="text"
                                               name="productName"
                                               value={otherDetails}
                                               onChange={onChangeOtherDetails}
                                               validation={[required]}
                                        />
                                    </div>

                                    <div>
                                        <h2 className="mt-8 font-light mb-2">Zdjęcia produktu (max 5)</h2>
                                        <label
                                            className="cursor-pointer bg-black hover:bg-white hover:text-black text-white border-2 border-transparent hover:border-black px-6 py-2 font-normal">
                                            <input
                                                className="hidden"
                                                type="file"
                                                name="images"
                                                onChange={onSelectFile}
                                                multiple
                                                accept="image/png , image/jpeg, image/webp"
                                            />
                                            WYBIERZ ZDJĘCIE
                                        </label>
                                        {selectedImages.length > 0 &&
                                            (selectedImages.length > 5 ? (
                                                <p className="text-red-600 font-normal mt-2">
                                                    Nie możesz dodać więcej niż 5 zdjęć! <br/>
                                                    <span>Proszę usuń <b> {selectedImages.length - 5} </b> z nich.</span>
                                                </p>
                                            ) : (
                                                <button
                                                    className="upload-btn"
                                                    onClick={() => {
                                                        console.log(selectedImages);
                                                    }}
                                                />
                                            ))}
                                        <div className="images">
                                            {selectedImages &&
                                                selectedImages.map((image, index) => {
                                                    return (
                                                        <div key={image}>
                                                            <img src={image} className="h-52 w-52 mt-4" alt="upload"/>
                                                            <button onClick={() => deleteHandler(image)}
                                                                    className="ml-8 mt-4 hover:bg-black hover:text-white border-2 hover:border-transparent border-black px-3 py-1 font-normal">
                                                                USUŃ ZDJĘCIE
                                                            </button>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                    </div>

                                    <Description/>

                                    <button
                                        className="mt-8 mb-20 w-1/2 bg-black hover:bg-white hover:text-black text-white border-2 border-transparent hover:border-black px-6 py-2 font-normal"
                                    >DODAJ PRODUKT
                                    </button>
                                </div>
                            )}
                            {message && (
                                <div className="form-group text-center h-12 bg-m_gray my-8">
                                    <div
                                        className={successful ? "pt-3 text-green-600" : "pt-3 text-red-600"}
                                        role="alert"
                                    >
                                        {message}
                                    </div>
                                </div>
                            )}
                            <CheckButton style={{display: "none"}} ref={checkBtn}/>

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
