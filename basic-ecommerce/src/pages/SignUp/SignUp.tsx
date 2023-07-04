import React, { useState } from 'react';
import ProductTemplate from '../../components/Template/ProductTemplate';
import CustomInput from '../../components/Custom/CustomInput';
import { Button, MenuItem, Select } from '@mui/material';
import "./SignUp.css"
const SingUp = () => {

    const defaultForm = {
        fullName: "",
        email: "",
        password: ""
    }
    const [form, setForm] = useState(defaultForm)
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
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
                    value={"TR"}
                    style={{ width: '100%' }}
                >
                    <MenuItem value={"TR"}>Türkçe</MenuItem>
                    <MenuItem value={"EN"}>İngilizce</MenuItem>
                </Select>
                <Button
                    style={{ width: '100%' }}
                    disabled
                    variant="contained">Sing Up</Button>

            </div>
        </ProductTemplate>
    )
}
export default SingUp