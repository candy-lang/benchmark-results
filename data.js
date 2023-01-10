window.BENCHMARK_DATA = {
  "lastUpdate": 1673367248423,
  "repoUrl": "https://github.com/candy-lang/candy",
  "entries": {
    "Compiler": [
      {
        "commit": {
          "author": {
            "name": "candy-lang",
            "username": "candy-lang"
          },
          "committer": {
            "name": "candy-lang",
            "username": "candy-lang"
          },
          "id": "8cd5d7eb8007811b6c8dbfc310beeb2e13cab3e8",
          "message": "Benchmark CI",
          "timestamp": "2023-01-07T02:55:45Z",
          "url": "https://github.com/candy-lang/candy/pull/263/commits/8cd5d7eb8007811b6c8dbfc310beeb2e13cab3e8"
        },
        "date": 1673345211574,
        "tool": "cargo",
        "benches": [
          {
            "name": "VM Runtime/hello_world",
            "value": 16622798,
            "range": "± 1763747",
            "unit": "ns/iter"
          },
          {
            "name": "VM Runtime/fibonacci/15",
            "value": 564313335,
            "range": "± 11936706",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "candy-lang",
            "username": "candy-lang"
          },
          "committer": {
            "name": "candy-lang",
            "username": "candy-lang"
          },
          "id": "1d8a5b4ebc13182fe6ecb801d8a7012f42cefff7",
          "message": "Don't clone MIR for optimizations",
          "timestamp": "2023-01-07T02:55:45Z",
          "url": "https://github.com/candy-lang/candy/pull/264/commits/1d8a5b4ebc13182fe6ecb801d8a7012f42cefff7"
        },
        "date": 1673355048178,
        "tool": "cargo",
        "benches": [
          {
            "name": "VM Runtime/hello_world",
            "value": 11241997,
            "range": "± 183377",
            "unit": "ns/iter"
          },
          {
            "name": "VM Runtime/fibonacci/15",
            "value": 444014133,
            "range": "± 3643338",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "candy-lang",
            "username": "candy-lang"
          },
          "committer": {
            "name": "candy-lang",
            "username": "candy-lang"
          },
          "id": "1d8a5b4ebc13182fe6ecb801d8a7012f42cefff7",
          "message": "Don't clone MIR for optimizations",
          "timestamp": "2023-01-07T02:55:45Z",
          "url": "https://github.com/candy-lang/candy/pull/264/commits/1d8a5b4ebc13182fe6ecb801d8a7012f42cefff7"
        },
        "date": 1673367248174,
        "tool": "cargo",
        "benches": [
          {
            "name": "VM Runtime/hello_world",
            "value": 13902632,
            "range": "± 306296",
            "unit": "ns/iter"
          },
          {
            "name": "VM Runtime/fibonacci/15",
            "value": 427185862,
            "range": "± 4656324",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}