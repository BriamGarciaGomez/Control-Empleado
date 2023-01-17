<x-layouts.app title="Tiendas" metaDescription="Reporte de tiendas">
    <h1>Reporte de Empleados.</h1>

    <table class="empleados">
        <tr class="titulo">
            <th class="a">#</th>
            <th class="b">Tienda</th>
            <th class="b">Empleado</th>
            <th class="b">Puesto</th>
            <th class="b">Salario</th>
          
        </tr>

        @foreach ($reportes as $reporte)
            <tr class="contenido">
                <td class="a0">{{ $reporte->id }}</td>
                <td class="a0">{{ $reporte->Nombre}}</td>
                <td class="a1">{{ $reporte->Primer_Nombre }}</td>
                <td class="a1">{{ $reporte->puesto }}</td>
                <td class="a1">Q{{ $reporte->Salario }}</td>
            </tr>
        @endforeach
    </table>

</x-layouts.app>