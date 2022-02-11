import React from 'react';
import { Card,Table } from 'react-materialize';

export const ListarCitas = () => {
    return (
        <Card title="Agenda">
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Síntomas</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </div>
    </Card>
    )
}
