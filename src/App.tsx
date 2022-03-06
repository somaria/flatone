import React from 'react'

interface DataProps {
  id: number
  clazz_name: string
  answers: [{ emotion: number }, { emotion: number }]
  created_at: string
}

interface Dictionary<T> {
  [Key: string]: T
}

const dataone: DataProps[] = [
  {
    id: 1,
    clazz_name: '1A',
    answers: [{ emotion: 3 }, { emotion: 9 }],
    created_at: 'jan',
  },
  {
    id: 2,
    clazz_name: '1A',
    answers: [{ emotion: 4 }, { emotion: 12 }],
    created_at: 'feb',
  },
  {
    id: 3,
    clazz_name: '1B',
    answers: [{ emotion: 2 }, { emotion: 10 }],
    created_at: 'feb',
  },
  {
    id: 4,
    clazz_name: '1B',
    answers: [{ emotion: 1 }, { emotion: 11 }],
    created_at: 'feb',
  },
]

function App() {
  const datatwo: any[] = []

  dataone.map((item) => {
    let pe: number = 0
    let ne: number = 0
    if (item.answers[0].emotion <= 7) {
      pe = 1
    } else {
      pe = 0
    }
    if (item.answers[1].emotion > 7) {
      ne = -1
    } else {
      ne = 0
    }
    datatwo.push({
      clazz_name: item.clazz_name,
      month: item.created_at,
      pe: pe,
      ne: ne,
    })
  })
  console.log(datatwo)

  if (true) {
    var o: any = {}
    var datathree = datatwo.reduce(function (r, e) {
      var key: string = e.clazz_name
      if (!o[key]) {
        o[key] = e
        r.push(o[key])
      } else {
        o[key].pe += e.pe
        o[key].ne += e.ne
      }
      return r
    }, [])

    console.log(datathree)
  } else {
    var o: any = {}
    var datathree = datatwo.reduce(function (r, e) {
      var key: string = e.clazz_name + '|' + e.month
      if (!o[key]) {
        o[key] = e
        r.push(o[key])
      } else {
        o[key].pe += e.pe
        o[key].ne += e.ne
      }
      return r
    }, [])

    console.log(datathree)
  }

  return <div>React TypeScript</div>
}

export default App
