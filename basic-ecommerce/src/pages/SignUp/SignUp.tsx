import React, { useState } from 'react';
import ProductTemplate from '../../components/Template/ProductTemplate';
import CustomInput from '../../components/Custom/CustomInput';
import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import "./SignUp.css"
import { creeateUserRequest } from '../../api/controllers/user-controller';
import { useNavigate } from 'react-router-dom';

const SingUp = () => {
    const navigate = useNavigate()
    const defaultForm = {
        fullName: "",
        email: "",
        password: ""
    }
    const [form, setForm] = useState(defaultForm)
    const [language, setLanguage] = useState("TR")
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSignUp = async () => {
        try {
            let res = await creeateUserRequest(defaultForm);
            console.log('res', res)
            if (res.status === 201) {
                navigate("/account");
            }
        } catch (error) { }
    }
    const handleLanguageChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };
    console.log('language', language)
    return (
        <ProductTemplate>
            <div className='Main'>
                <h3>Account</h3>
                <CustomInput value={form.fullName} onChange={handleFormChange} name='fullName' label='Full  Name' />
                <CustomInput value={form.email} onChange={handleFormChange} name='email' label='E-mail' type='email' />
                <CustomInput value={form.password} onChange={handleFormChange} name='password' label="Password" type='password' />
                <Select
                    labelId="demo-simple-select-label"
                    label="Locale"
                    value={language}
                    onChange={handleLanguageChange}
                    style={{ width: '100%' }}
                >
                    <MenuItem value={"TR"}>Türkçe</MenuItem>
                    <MenuItem value={"EN"}>English</MenuItem>
                </Select>
                <Button
                    style={{ width: '100%' }}
                    onClick={() => handleSignUp()}
                    variant="contained">Sing Up</Button>

            </div>
        </ProductTemplate>
    )
}
export default SingUp