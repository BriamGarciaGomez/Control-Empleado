<x-layouts.app title="Logros" metaDescription="Reporte de logros">

    <h1>Reporte de logros.</h1>
    <table id="customers">
        <tr id="customers">
            <th id="a">#</th>
            <th id="customers">Descripcion</th>
        </tr>
        @foreach($reportes as $logro)
             <tr>
                <td>{{$logro->id}}</td>
                <td>{{$logro->Descripcion}}</td>
             </tr>
            
        @endforeach
    </table>


</x-layouts.app>
