import Io from 'socket.io-client'

class SocketIo {
  constructor(url) {
    this.url = url
    this.socket = Io.connect(this.url, {
      path: '/wechat'
    })
    this.socketStatus = false
    return this.socket
  }

  connect(func = () => { }) {
    this.socket.on('connect', func)
    this.socketStatus = true
  }

  reConnect(bool) {
    this.socket.reconnect(bool)
    this.socketStatus = false
  }

  disConnect(func = () => { }) {
    this.socket.disconnect()
    this.socket.on('disconnect', func)
    this.socketStatus = false
  }

  emitEvent(eventName = '', data = {}) {
    this.socket.emit(eventName, data)
  }

  onEvent(eventName, callback = () => { }) {
    this.socket.on(eventName, callback)
  }

  getSocketId() {
    if (this.socketStatus === 'on') {
      return this.socket.id
    }
    return null
  }

}

export default SocketIo