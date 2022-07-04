export type OrderType = {
  "id": number
  "oguid": string
  "status": OrderStatusType
  "order_type": OrderTypeType
  "terminal": OrderTerminalType
  "account": OrderAccountType
  "created_user": OrderUserType
  "created_date": number
}

export type OrderStatusType = 'new' | 'completed' | 'assigned_to' | 'started' | 'declined'

type OrderTypeType = { name: string, oguid: string }
type OrderTerminalType = OrderTypeType
type OrderAccountType = OrderTypeType
type OrderUserType = OrderTypeType & { surname: string, patronymic: string }