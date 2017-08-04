import Io from 'socket.io-client'

class SocketIo {
  constructor(url) {
    this.url = url
    this.socket = Io.connect(this.url, {
      path: '/wechat'
    })
    this.socketStatus = 'off'
  }

  connect(func = () => { }) {
    this.socket.on('connect', func)
    this.socketStatus = 'on'
  }

  reConnect(bool) {
    this.socket.reconnect(bool)
    this.socketStatus = 'off'
  }

  disConnect(func = () => { }) {
    this.socket.disconnect()
    this.socket.on('disconnect', func)
    this.socketStatus = 'off'
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