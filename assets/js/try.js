JXG.Options.point.color = '#0667F7CC' // 設定點的顏色為黑色
JXG.Options.line.color = '#047686' // 設定線的顏色為黑色
JXG.Options.point.size = 1 // 設定點的大小
JXG.Options.point.withLabel = false // 設定點的大小
JXG.Options.elements.strokeColor = '#F8AA36CC' // 設定線的顏色為黑色
JXG.Options.elements.strokeWidth = 3 // 設定線的寬寬
JXG.Options.elements.highlight = false // 游標停留在物件上不要突顯
JXG.Options.axis.withLabel = true

const board = JXG.JSXGraph.initBoard('box', {
  boundingbox: [-10, 10, 10, -10],
  axis: false,
  showCopyright: false,
  showFullscreen: true,
  showScreenshot: true,
  showClearTraces: true,
  showInfobox: false,
  showNavigation: true,
  grid: true,
  defaultAxes: {
    x: {
      withLabel: true,
      ticks: {
        label: {
          visible: false
        }
      },
      label: {
        position: 'rt',
        offset: [-10, 10]
      },
      lastArrow: {
        type: 4,
        size: 10
      }
    },
    y: {
        withLabel: true,
        ticks: {
          label: {
            visible: false
          }
        },
        label: {
          position: 'rt',
          offset: [6, -6]
        },
        lastArrow: {
          type: 4,
          size: 10
        }
      }
    }
  })
  board.renderer.container.style.border = 'none'
  board.renderer.container.style.borderRadius = '0'
  
  // 控制按鈕切換的變數
  let showCentroid = false, showCircumcentre = false, showOrthocentre = false
  let showMedians = false, showBiperpendiculars = false, showAltitudes = false
  let showEulerLine = false
  
  // 三角形的三頂點和三邊
  const pointA = board.create('point', [-7, -5])
  const pointB = board.create('point', [7, -5])
  const pointC = board.create('point', [2, 7])
  const sideAB = board.create('segment', [pointA, pointB])
  const sideBC = board.create('segment', [pointB, pointC])
  const sideCA = board.create('segment', [pointC, pointA])

  

  
  
  // const triagnleABC = board.create('polygon', [pointA, pointB, pointC])
  