<x-layouts.app title="Faltas" metaDescription="Reporte de Faltas">


    <h1>Reporte de faltas.</h1>
    <table id="customers">
        <tr id="customers">
            <th id="a">#</th>
            <th id="customers">Descripcion</th>
        </tr>
        @foreach($reportes as $falta)
             <tr>
                <td>{{$falta->id}}</td>
                <td>{{$falta->Descripcion}}</td>
             </tr>
            
        @endforeach
    </table>
    

</x-layouts.app>
