# Mundo Play — prototipo inicial

Este proyecto es un catálogo visual estático para probar el diseño de Mundo Play desde un celular.

## Incluye
- Diseño adaptable a celular y escritorio.
- Producto inicial: Netflix.
- Precio de ejemplo: $15.000 COP.
- Aviso claro de que aún no se procesan pagos ni se entregan credenciales.

## Cómo publicarlo gratis
1. Crea una cuenta en GitHub.
2. Crea un repositorio público llamado `mundo-play`.
3. Sube los archivos de la carpeta `public` a la raíz del repositorio (o activa GitHub Pages apuntando a `/public` si configuras el repositorio para ello).
4. En GitHub, entra a Settings → Pages y sigue las opciones que aparecen para publicar el sitio.
5. Abre la URL publicada desde tu celular y prueba el botón.

## Importante
Este prototipo NO tiene backend, base de datos, checkout ni integración de pagos. No recolecta datos del cliente ni contiene credenciales.

## Arquitectura futura recomendada
- Frontend: esta web estática.
- Backend: servicio server-side que valide la firma/notificación de la pasarela.
- Pedidos: base de datos con ID único y estados `PENDING_PAYMENT`, `PAID`, `PURCHASING`, `PURCHASED`, `DELIVERED`, `FAILED`, `REFUNDED`.
- Procesador: cola de trabajos con reintentos controlados.
- Proveedor: API oficial de StreamXpress si está disponible; navegador automatizado solo si el proveedor lo autoriza.
- Entrega: canal privado; nunca mostrar credenciales en URLs, HTML público, logs ni analítica.

## Reglas de seguridad obligatorias
1. Nunca confiar solo en una página de “pago exitoso”; verificar el estado del pago desde el backend.
2. Procesar notificaciones de forma idempotente: un mismo pago no debe generar dos compras.
3. No almacenar claves secretas en el frontend ni en el repositorio.
4. No guardar contraseñas de cuentas de cliente en una hoja pública.
5. No comprar si el precio/costo no coincide con el producto esperado.
6. Si la compra al proveedor falla, detener la entrega y generar una alerta/revisión.
7. Confirmar con StreamXpress las condiciones de automatización y distribución de credenciales.

## Economía del producto
Venta: 15.000 COP
Costo proveedor: 9.500 COP
Margen bruto antes de comisiones y gastos: 5.500 COP (36,7% del precio de venta).

No uses el prototipo para cobrar dinero real hasta completar las integraciones, pruebas y políticas de privacidad/compra.
