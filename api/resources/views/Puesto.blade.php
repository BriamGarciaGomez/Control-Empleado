<x-layouts.app title="Puestos" metaDescription="Reporte de puestos">  
    <h1>Reporte de Puestos</h1>
    <table id="customers">
        <tr id="customers">
            <th id="a">#</th>
            <th id="customers">Nombre</th>
            <th id="customers">Salario</th>
        </tr>
        @foreach($reportes as $reporte)
             <tr>
                <td>{{$reporte->id}}</td>
                <td>{{$reporte->Nombre}}</td>
                <td>{{$reporte->Salario}}</td>
             </tr>
            
        @endforeach
    </table>
</x-layouts.app>
