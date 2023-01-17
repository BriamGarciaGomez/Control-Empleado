<x-layouts.app title="Tiendas" metaDescription="Reporte de tiendas">


    <h1>Reporte de Empleados.</h1>

    <table class="empleados">
        <tr class="titulo">
            <th class="a">#</th>
            <th class="b">Nombre</th>
            <th class="b">Apellido</th>
            <th class="b">Fch_Nac</th>
            <th class="b c">Tienda</th>
            <th class="b">Puesto</th>
            <th class="b">Salario</th>
        </tr>

        @foreach ($reportes as $reporte)
            <tr class="contenido">
                <td class="a0">{{ $reporte->id }}</td>
                <td class="a1">{{ $reporte->Primer_Nombre }}</td>
                <td class="a1">{{ $reporte->Primer_Apellido }}</td>
                <td class="a1">{{ $reporte->Fecha_Nacimiento }}</td>
                <td class="a1 c">{{ $reporte->tienda->Nombre }}</td>
                <td class="a1">{{ $reporte->puesto->Nombre }}</td>
                <td class="a1">Q{{ $reporte->puesto->Salario }}</td>
            </tr>
        @endforeach
    </table>
    <?php
    $suma = 0;
    foreach ($reportes as $numero) {
        if ($numero->tienda->Nombre )
        {
            
        }
        $suma += $numero->puesto->Salario;
    }
    ?>
    <div class="row">
        <div class="col-md-4">
            <div class="forn-group">
                <label for="">Total de Nomina. </label>
                <br>
                <input type="text" value="Q {{ $suma }}.00" class="form-control" disabled>
            </div>
        </div>
    </div>





</x-layouts.app>
