# Código del proyecto "Gestión de cuenta bancaria" (parcial)
class CuentaBancaria:
    tasa_interes = 0.03
    total_cuentas = 0
    _siguiente_numero = 1
    def __init__(self, titular: str, saldo_inicial: float = 0.0):
        self.titular = titular
        self.saldo = saldo_inicial
        self.numero_cuenta = CuentaBancaria._siguiente_numero
        CuentaBancaria._siguiente_numero += 1
        CuentaBancaria.total_cuentas += 1
    def depositar(self, monto: float) -> None:
        if not CuentaBancaria.validar_monto(monto):
            print(f"Depósito inválido: {monto}.")
            return
        self.saldo += monto
    def retirar(self, monto: float) -> None:
        if monto > self.saldo:
            print("Fondos insuficientes.")
            return
        self.saldo -= monto
    @staticmethod
    def validar_monto(monto: float) -> bool:
        return monto > 0.0
