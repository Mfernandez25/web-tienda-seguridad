<?php
 if(!empty($_POST['name']) AND !empty($_POST['edad']) AND !empty($_POST['email']) AND !empty($_POST['telefono']) AND !empty($_POST['fecha']) AND !empty($_POST['ciudad']) AND !empty($_POST['numero_personas']) AND !empty($_POST['message'])){

$to ="correo@gmai.com";
$headers = "Content-Type: text/html; charset=iso-8859-1\n";
$headers .= "From:".$_POST['name']."\r\n";
$tema="Contacto desde Caleta San José";</td>
  </tr>
  <tr>
    <td width='20%' align='center' bgcolor='#FFFFCC'><strong>Edad:</strong></td>
    <td width='80%' align='left'>
$mensaje="
<table border='0' cellspacing='2' cellpadding='2'>
  <tr>
    <td width='20%' align='center' bgcolor='#FFFFCC'><strong>Nombres y Apellidos:</strong></td>
    <td width='80%' align='left'>$_POST[name]$_POST[edad]</td>
  </tr>
  <tr>
    <td align='center' bgcolor='#FFFFCC'><strong>E-mail:</strong></td>
    <td align='left'>$_POST[email]</td>
  </tr>
  <tr>
    <td align='center' bgcolor='#FFFFCC'><strong>Teléfono:</strong></td>
    <td align='left'>$_POST[telefono]</td>
  </tr>
  <tr>
    <td align='center' bgcolor='#FFFFCC'><strong>Fecha de reserva:</strong></td>
    <td align='left'>$_POST[fecha]</td>
  </tr>
  <tr>
  <tr>
    <td align='center' bgcolor='#FFFFCC'><strong>Ciudad/País:</strong></td>
    <td align='left'>$_POST[ciudad]</td>
  </tr>
    <td width='20%' align='center' bgcolor='#FFFFCC'><strong>Número de Personas:</strong></td>
    <td width='80%' align='left'>$_POST[numero_personas]</td>
  </tr>
   <tr>
    <td width='20%' align='center' bgcolor='#FFFFCC'><strong>Mensaje:</strong></td>
    <td width='80%' align='left'>$_POST[message]</td>
  </tr>
</table>
";
@mail($to,$tema,$mensaje,$headers);
}
?>