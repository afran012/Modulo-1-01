import React from 'react';
import { Button, Card, Icon, Textarea, TextInput } from 'react-materialize'

export const AgregarCita = () => {
    return (
        <Card title="Agregar Citas" >
            <form>
                <div className="row">
                    <TextInput
                        id="nombre"
                        label="Nombre"
                        name="nombre"
                      
                    />
                </div>
                <div className="row">
                    <div className="col s10 l6">
                        <label className="col s10 l6">Fecha</label>
                        <input 
                        type="date" 
                        id="fecha" 
                        name="fecha"
                          
                            />
                    </div>
                    <div className="col s10 l6">
                        <label className="col s10 l6">Hora</label>
                        <input 
                        type="time" 
                        id="hora" 
                        name="hora"
                           
                             />
                    </div>
                </div>
                <div className="row">
                    <Textarea
                        id="sintomas"
                        label="Síntomas"
                        name="sintomas"
                      
                    />
                </div>
                <Button
                    className="indigo darken-4"
                    type="submit"
                    node="button"
                >
                    Guardar
                    <Icon right>
                        send
                    </Icon>
                </Button>
            </form>
        </Card>
    )
}
