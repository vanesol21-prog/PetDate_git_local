fun main (){
    try {
        DatabaseConnection.getConnection().use {
                println("Conexion exitosa a MySql desde Kotlin")
        }
    } catch (e: Exception) {
                println("Error de conexión: ${e.message}")
            }
        }
