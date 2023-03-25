JXG.Options.point.color = '#0667F7CC' // 設定點的顏色為黑色
JXG.Options.line.color = '#047686' // 設定線的顏色為黑色
JXG.Options.point.size = 0.5 // 設定點的大小
JXG.Options.point.withLabel = false // 設定點的大小
JXG.Options.elements.strokeColor = '#F8AA36CC' // 設定線的顏色為黑色
JXG.Options.elements.strokeWidth = 2 // 設定線的寬寬
JXG.Options.elements.highlight = false // 游標停留在物件上不要突顯
JXG.Options.axis.withLabel = true
JXG.Options.elements.strokeColor = '#F65353CC' // 設定線的顏色為黑色



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
  
  
  
  
  // 三角形的三頂點和三邊
  const pointA = board.create('point', [-7,4],{ color: '#420BE0' })
  const pointB = board.create('point', [-2.8, 8.3],{color:'#047686'}  )
  const pointC = board.create('point', [-7,1.5],{color:'#047686'})
  const pointD = board.create('point', [-2,0.3],{color:'#F65353'})
  const pointE = board.create('point', [-2, -0.6],{color:'#F65353'})
  const pointF = board.create('point', [0,5],{color:'#E28B08'})
  const pointG = board.create('point', [1, 2.5],{color:'#E28B08'} )
  const pointH = board.create('point', [4,2.5],{color:'#E28B08'} )
  const pointI = board.create('point', [-3,7],{size: 0})
  const pointJ = board.create('point', [-3,2],{size: 0})
  const pointK = board.create('point', [-5.4,4],{size: 0})
  const pointL = board.create('point', [-0.5,4],{size: 0})
  const pointM = board.create('point', [2,4.3],{color:'#E28B08'})
  const pointN = board.create('point', [-3,4],{size: 0})
  const pointO = board.create('point', [-5,3],{size: 0})
  const pointP = board.create('point', [-3,5],{size: 0})
  const sideAK = board.create('segment', [pointA, pointK],{ color: '#420BE0' })
  const sideBI = board.create('segment', [pointB, pointI])
  const sideCK = board.create('segment', [pointC, pointK])
  const sideDJ = board.create('segment', [pointD, pointJ],{color:'#F65353'})
  const sideFL = board.create('segment', [pointF, pointL],{color:'#E28B08'} )
  const sideGM = board.create('segment', [pointG, pointM],{color:'#E28B08'} )
  const sideHM = board.create('segment', [pointH, pointM],{color:'#E28B08'} )
  const c1 = board.create('ellipse',[pointP,pointN,pointO],{strokeWidth:'2',color:'#4D4D4E'});

  const butt = board.create('text', [-10, 4, "＃高度傳染性"]);
  const butt1 = board.create('text', [-4, 9, "＃高度傳染性"]);
  
  const butt3 = board.create('text', [-4, 0, "＃基於 aper 的 POC 測試"]);
  const butt4 = board.create('text', [-4, -1.3, "＃涉及執行診斷"]);
  const butt5 = board.create('text', [0, 5, "＃準確的現場診斷"]);
  const butt6 = board.create('text', [0, 2, "＃優缺點"]);
  const butt7 = board.create('text', [2, 2, "＃分析效能"]);
  const butt8 = board.create('text', [-5.3, 4.5, "COVID-19大流行"],{color:'white',fontSize: 1.8, fontUnit: 'vmin'});
  

// A toggle button
const butt10 = board.create('button', [-10,1, '＃紙質設備', function() 
{
  var txt;
  butt10.value = !butt10.value;
  if (butt10.value) {
  	txt = '該綜述首先介紹了可用於紙質設備之檢測方法之原理';
  } else {
  	txt = '＃紙質設備';
  }
	butt10.rendNodeButton.innerHTML = txt;
}]);

// Set initial value for the button
if (!JXG.exists(butt10.value)) {
	butt10.value = false;
}

var p = board.create('text', [-11, 0, "SARS-CoV-2的紙質POC設備"], {
	visible: () => butt10.value
});

  
  

  

  
  
  // const triagnleABC = board.create('polygon', [pointA, pointB, pointC])
  