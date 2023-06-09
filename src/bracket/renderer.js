const database = {
    "stage": [
        {
            "id": 0,
            "tournament_id": 0,
            "name": "Poules",
            "type": "round_robin",
            "number": 1,
            "settings": {
                "size": 32,
                "groupCount": 8,
                "roundRobinMode": "simple"
            }
        },
        {
            "id": 1,
            "tournament_id": 0,
            "name": "Tournoi Elite",
            "type": "double_elimination",
            "number": 2,
            "settings": {
                "size": 16,
                "grandFinal": "simple",
                "skipFirstRound": false
            }
        }
    ],
    "match": [
        {
            "id": 0,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 0,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 0,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 1,
                "score": 9,
                "result": "loss"
            }
        },
        {
            "id": 1,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 0,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 2,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 3,
                "score": 12,
                "result": "loss"
            }
        },
        {
            "id": 2,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 1,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 0,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 3,
                "score": 6,
                "result": "loss"
            }
        },
        {
            "id": 3,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 1,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 1,
                "score": 4,
                "result": "loss"
            },
            "opponent2": {
                "id": 2,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 4,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 2,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 0,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 2,
                "score": 10,
                "result": "loss"
            }
        },
        {
            "id": 5,
            "stage_id": 0,
            "group_id": 0,
            "round_id": 2,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 3,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 1,
                "score": 6,
                "result": "loss"
            }
        },
        {
            "id": 6,
            "stage_id": 0,
            "group_id": 1,
            "round_id": 3,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 4,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 5,
                "score": 1,
                "result": "loss"
            }
        },
        {
            "id": 7,
            "stage_id": 0,
            "group_id": 1,
            "round_id": 3,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 6,
                "score": 15,
                "result": "draw"
            },
            "opponent2": {
                "id": 7,
                "score": 15,
                "result": "draw"
            }
        },
        {
            "id": 8,
            "stage_id": 0,
            "group_id": 1,
            "round_id": 4,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 4,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 7,
                "score": 1,
                "result": "loss"
            }
        },
        {
            "id": 9,
            "stage_id": 0,
            "group_id": 1,
            "round_id": 4,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 5,
                "score": 5,
                "result": "loss"
            },
            "opponent2": {
                "id": 6,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 10,
            "stage_id": 0,
            "group_id": 1,
            "round_id": 5,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 4,
                "score": 14,
                "result": "win"
            },
            "opponent2": {
                "id": 6,
                "score": 8,
                "forfeit": true
            }
        },
        {
            "id": 11,
            "stage_id": 0,
            "group_id": 1,
            "round_id": 5,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 7,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 5,
                "score": 11,
                "result": "loss"
            }
        },
        {
            "id": 12,
            "stage_id": 0,
            "group_id": 2,
            "round_id": 6,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 8,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 9,
                "score": 7,
                "result": "loss"
            }
        },
        {
            "id": 13,
            "stage_id": 0,
            "group_id": 2,
            "round_id": 6,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 10,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 11,
                "score": 3,
                "result": "loss"
            }
        },
        {
            "id": 14,
            "stage_id": 0,
            "group_id": 2,
            "round_id": 7,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 8,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 11,
                "score": 9,
                "result": "loss"
            }
        },
        {
            "id": 15,
            "stage_id": 0,
            "group_id": 2,
            "round_id": 7,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 9,
                "score": 5,
                "result": "loss"
            },
            "opponent2": {
                "id": 10,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 16,
            "stage_id": 0,
            "group_id": 2,
            "round_id": 8,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 8,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 10,
                "score": 12,
                "result": "loss"
            }
        },
        {
            "id": 17,
            "stage_id": 0,
            "group_id": 2,
            "round_id": 8,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 11,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 9,
                "score": 11,
                "result": "loss"
            }
        },
        {
            "id": 18,
            "stage_id": 0,
            "group_id": 3,
            "round_id": 9,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 12,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 13,
                "score": 4,
                "result": "loss"
            }
        },
        {
            "id": 19,
            "stage_id": 0,
            "group_id": 3,
            "round_id": 9,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 14,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 15,
                "score": 8,
                "result": "loss"
            }
        },
        {
            "id": 20,
            "stage_id": 0,
            "group_id": 3,
            "round_id": 10,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 12,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 15,
                "score": 7,
                "result": "loss"
            }
        },
        {
            "id": 21,
            "stage_id": 0,
            "group_id": 3,
            "round_id": 10,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 13,
                "score": 1,
                "result": "loss"
            },
            "opponent2": {
                "id": 14,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 22,
            "stage_id": 0,
            "group_id": 3,
            "round_id": 11,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 12,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 14,
                "score": 7,
                "result": "loss"
            }
        },
        {
            "id": 23,
            "stage_id": 0,
            "group_id": 3,
            "round_id": 11,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 15,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 13,
                "score": 2,
                "result": "loss"
            }
        },
        {
            "id": 24,
            "stage_id": 0,
            "group_id": 4,
            "round_id": 12,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 16,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 17,
                "score": 0,
                "result": "loss"
            }
        },
        {
            "id": 25,
            "stage_id": 0,
            "group_id": 4,
            "round_id": 12,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 18,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 19,
                "score": 4,
                "result": "loss"
            }
        },
        {
            "id": 26,
            "stage_id": 0,
            "group_id": 4,
            "round_id": 13,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 16,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 19,
                "score": 11,
                "result": "loss"
            }
        },
        {
            "id": 27,
            "stage_id": 0,
            "group_id": 4,
            "round_id": 13,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 17,
                "score": 2,
                "result": "loss"
            },
            "opponent2": {
                "id": 18,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 28,
            "stage_id": 0,
            "group_id": 4,
            "round_id": 14,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 16,
                "score": 15,
                "result": "draw"
            },
            "opponent2": {
                "id": 18,
                "score": 15,
                "result": "draw"
            }
        },
        {
            "id": 29,
            "stage_id": 0,
            "group_id": 4,
            "round_id": 14,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 19,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 17,
                "score": 5,
                "result": "loss"
            }
        },
        {
            "id": 30,
            "stage_id": 0,
            "group_id": 5,
            "round_id": 15,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 20,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 21,
                "score": 8,
                "result": "loss"
            }
        },
        {
            "id": 31,
            "stage_id": 0,
            "group_id": 5,
            "round_id": 15,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 22,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 23,
                "score": 1,
                "result": "loss"
            }
        },
        {
            "id": 32,
            "stage_id": 0,
            "group_id": 5,
            "round_id": 16,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 20,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 23,
                "score": 1,
                "result": "loss"
            }
        },
        {
            "id": 33,
            "stage_id": 0,
            "group_id": 5,
            "round_id": 16,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 21,
                "score": 9,
                "result": "loss"
            },
            "opponent2": {
                "id": 22,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 34,
            "stage_id": 0,
            "group_id": 5,
            "round_id": 17,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 20,
                "score": 15,
                "result": "draw"
            },
            "opponent2": {
                "id": 22,
                "score": 15,
                "result": "draw"
            }
        },
        {
            "id": 35,
            "stage_id": 0,
            "group_id": 5,
            "round_id": 17,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 23,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 21,
                "score": 9,
                "result": "loss"
            }
        },
        {
            "id": 36,
            "stage_id": 0,
            "group_id": 6,
            "round_id": 18,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 24,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 25,
                "score": 2,
                "result": "loss"
            }
        },
        {
            "id": 37,
            "stage_id": 0,
            "group_id": 6,
            "round_id": 18,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 26,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 27,
                "score": 7,
                "result": "loss"
            }
        },
        {
            "id": 38,
            "stage_id": 0,
            "group_id": 6,
            "round_id": 19,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 24,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 27,
                "score": 9,
                "result": "loss"
            }
        },
        {
            "id": 39,
            "stage_id": 0,
            "group_id": 6,
            "round_id": 19,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 25,
                "score": 2,
                "result": "loss"
            },
            "opponent2": {
                "id": 26,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 40,
            "stage_id": 0,
            "group_id": 6,
            "round_id": 20,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 24,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 26,
                "score": 11,
                "result": "loss"
            }
        },
        {
            "id": 41,
            "stage_id": 0,
            "group_id": 6,
            "round_id": 20,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 27,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 25,
                "score": 6,
                "result": "loss"
            }
        },
        {
            "id": 42,
            "stage_id": 0,
            "group_id": 7,
            "round_id": 21,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 28,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 29,
                "score": 0,
                "result": "loss"
            }
        },
        {
            "id": 43,
            "stage_id": 0,
            "group_id": 7,
            "round_id": 21,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 30,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 31,
                "score": 3,
                "result": "loss"
            }
        },
        {
            "id": 44,
            "stage_id": 0,
            "group_id": 7,
            "round_id": 22,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 28,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 31,
                "score": 6,
                "result": "loss"
            }
        },
        {
            "id": 45,
            "stage_id": 0,
            "group_id": 7,
            "round_id": 22,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 29,
                "score": 2,
                "result": "loss"
            },
            "opponent2": {
                "id": 30,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 46,
            "stage_id": 0,
            "group_id": 7,
            "round_id": 23,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 28,
                "score": 7,
                "result": "loss"
            },
            "opponent2": {
                "id": 30,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 47,
            "stage_id": 0,
            "group_id": 7,
            "round_id": 23,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 31,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 29,
                "score": 1,
                "result": "loss"
            }
        },
        {
            "id": 48,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 24,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 0,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 28,
                "score": 12,
                "result": "loss"
            }
        },
        {
            "id": 49,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 25,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 3,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 29,
                "score": 1,
                "result": "loss"
            }
        },
        {
            "id": 50,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 24,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 24,
                "score": 14,
                "result": "loss"
            },
            "opponent2": {
                "id": 6,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 51,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 25,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 27,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 5,
                "score": 7,
                "result": "loss"
            }
        },
        {
            "id": 52,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 24,
            "number": 3,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 12,
                "score": 12,
                "result": "loss"
            },
            "opponent2": {
                "id": 16,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 53,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 25,
            "number": 3,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 15,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 17,
                "score": 4,
                "result": "loss"
            }
        },
        {
            "id": 54,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 24,
            "number": 4,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 20,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 10,
                "score": 14,
                "result": "loss"
            }
        },
        {
            "id": 55,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 25,
            "number": 4,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 23,
                "score": 16,
                "result": "loss"
            },
            "opponent2": {
                "id": 9,
                "score": 19,
                "result": "win"
            }
        },
        {
            "id": 56,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 24,
            "number": 5,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 4,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 26,
                "score": 2,
                "result": "loss"
            }
        },
        {
            "id": 57,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 25,
            "number": 5,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 7,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 25,
                "score": 1,
                "result": "loss"
            }
        },
        {
            "id": 58,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 25,
            "number": 6,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 31,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 1,
                "score": 10,
                "result": "loss"
            }
        },
        {
            "id": 59,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 24,
            "number": 6,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 30,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 2,
                "score": 14,
                "result": "loss"
            }
        },
        {
            "id": 60,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 25,
            "number": 7,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 11,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 21,
                "score": 10,
                "result": "loss"
            }
        },
        {
            "id": 61,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 24,
            "number": 7,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 8,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 22,
                "score": 11,
                "result": "loss"
            }
        },
        {
            "id": 62,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 24,
            "number": 8,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 18,
                "score": 11,
                "result": "loss"
            },
            "opponent2": {
                "id": 14,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 63,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 25,
            "number": 8,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 19,
                "forfeit": true
            },
            "opponent2": {
                "id": 13,
                "result": "win"
            }
        },
        {
            "id": 64,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 26,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 3,
                "position": 1,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 27,
                "position": 2,
                "score": 12,
                "result": "loss"
            }
        },
        {
            "id": 65,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 27,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 0,
                "position": 1,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 6,
                "position": 2,
                "score": 9,
                "result": "loss"
            }
        },
        {
            "id": 66,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 27,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 16,
                "position": 3,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 20,
                "position": 4,
                "score": 9,
                "result": "loss"
            }
        },
        {
            "id": 67,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 26,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 15,
                "position": 3,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 9,
                "position": 4,
                "score": 9,
                "result": "loss"
            }
        },
        {
            "id": 68,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 26,
            "number": 3,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 7,
                "position": 5,
                "score": 5,
                "result": "loss"
            },
            "opponent2": {
                "id": 31,
                "position": 6,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 69,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 27,
            "number": 3,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 4,
                "position": 5,
                "score": 22,
                "result": "win"
            },
            "opponent2": {
                "id": 30,
                "position": 6,
                "score": 18,
                "result": "loss"
            }
        },
        {
            "id": 70,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 26,
            "number": 4,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 11,
                "position": 7,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 13,
                "position": 8,
                "score": 1,
                "result": "loss"
            }
        },
        {
            "id": 71,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 27,
            "number": 4,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 8,
                "position": 7,
                "score": 13,
                "result": "loss"
            },
            "opponent2": {
                "id": 14,
                "position": 8,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 72,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 28,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 19,
                "position": 8,
                "forfeit": true
            },
            "opponent2": {
                "id": 21,
                "position": 7,
                "result": "win"
            }
        },
        {
            "id": 73,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 29,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 18,
                "position": 8,
                "score": 12,
                "result": "loss"
            },
            "opponent2": {
                "id": 22,
                "position": 7,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 74,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 28,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 1,
                "position": 6,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 25,
                "position": 5,
                "score": 3,
                "result": "loss"
            }
        },
        {
            "id": 75,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 29,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 2,
                "position": 6,
                "score": 19,
                "result": "win"
            },
            "opponent2": {
                "id": 26,
                "position": 5,
                "score": 16,
                "result": "loss"
            }
        },
        {
            "id": 76,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 29,
            "number": 3,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 10,
                "position": 4,
                "score": 14,
                "result": "loss"
            },
            "opponent2": {
                "id": 12,
                "position": 3,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 77,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 28,
            "number": 3,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 23,
                "position": 4,
                "result": "win"
            },
            "opponent2": {
                "id": 17,
                "position": 3,
                "forfeit": true
            }
        },
        {
            "id": 78,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 28,
            "number": 4,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 5,
                "position": 2,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 29,
                "position": 1,
                "score": 1,
                "result": "loss"
            }
        },
        {
            "id": 79,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 29,
            "number": 4,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 24,
                "position": 2,
                "score": 6,
                "result": "loss"
            },
            "opponent2": {
                "id": 28,
                "position": 1,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 80,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 30,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 20,
                "position": 2,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 22,
                "position": 1,
                "score": 1,
                "result": "loss"
            }
        },
        {
            "id": 81,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 31,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 9,
                "position": 2,
                "score": 16,
                "result": "loss"
            },
            "opponent2": {
                "id": 21,
                "position": 1,
                "score": 19,
                "result": "win"
            }
        },
        {
            "id": 82,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 31,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 27,
                "position": 1,
                "score": 14,
                "result": "loss"
            },
            "opponent2": {
                "id": 1,
                "position": 2,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 83,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 30,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 6,
                "position": 1,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 2,
                "position": 2,
                "score": 3,
                "result": "loss"
            }
        },
        {
            "id": 84,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 31,
            "number": 3,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 13,
                "position": 4,
                "score": 5,
                "result": "loss"
            },
            "opponent2": {
                "id": 23,
                "position": 3,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 85,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 30,
            "number": 3,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 8,
                "position": 4,
                "score": 14,
                "result": "loss"
            },
            "opponent2": {
                "id": 12,
                "position": 3,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 86,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 31,
            "number": 4,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 7,
                "position": 3,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 5,
                "position": 4,
                "score": 4,
                "result": "loss"
            }
        },
        {
            "id": 87,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 30,
            "number": 4,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 30,
                "position": 3,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 28,
                "position": 4,
                "score": 8,
                "result": "loss"
            }
        },
        {
            "id": 88,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 32,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 3,
                "position": 1,
                "forfeit": true
            },
            "opponent2": {
                "id": 15,
                "position": 2,
                "result": "win"
            }
        },
        {
            "id": 89,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 33,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 0,
                "position": 1,
                "score": 2,
                "result": "win"
            },
            "opponent2": {
                "id": 16,
                "position": 2,
                "score": 1,
                "result": "loss"
            }
        },
        {
            "id": 90,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 33,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 4,
                "position": 3,
                "score": 2,
                "result": "win"
            },
            "opponent2": {
                "id": 14,
                "position": 4,
                "score": 0,
                "result": "loss"
            }
        },
        {
            "id": 91,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 32,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 31,
                "position": 3,
                "score": 4,
                "result": "loss"
            },
            "opponent2": {
                "id": 11,
                "position": 4,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 92,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 34,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 20,
                "position": 1,
                "score": 14,
                "result": "loss"
            },
            "opponent2": {
                "id": 6,
                "position": 2,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 93,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 35,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 21,
                "position": 1,
                "forfeit": true
            },
            "opponent2": {
                "id": 1,
                "position": 2,
                "result": "win"
            }
        },
        {
            "id": 94,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 34,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 12,
                "position": 3,
                "score": 6,
                "result": "loss"
            },
            "opponent2": {
                "id": 30,
                "position": 4,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 95,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 35,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 23,
                "position": 3,
                "score": 7,
                "result": "loss"
            },
            "opponent2": {
                "id": 7,
                "position": 4,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 96,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 36,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 31,
                "position": 2,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 1,
                "position": 1,
                "score": 4,
                "result": "loss"
            }
        },
        {
            "id": 97,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 37,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 14,
                "position": 2,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 6,
                "position": 1,
                "score": 13,
                "result": "loss"
            }
        },
        {
            "id": 98,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 37,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 16,
                "position": 1,
                "score": 5,
                "result": "loss"
            },
            "opponent2": {
                "id": 30,
                "position": 2,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 99,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 36,
            "number": 2,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 3,
                "position": 1,
                "forfeit": true
            },
            "opponent2": {
                "id": 7,
                "position": 2,
                "result": "win"
            }
        },
        {
            "id": 100,
            "stage_id": 1,
            "group_id": 8,
            "round_id": 38,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 0,
                "position": 1,
                "score": 0,
                "result": "loss"
            },
            "opponent2": {
                "id": 4,
                "position": 2,
                "score": 2,
                "result": "win"
            }
        },
        {
            "id": 101,
            "stage_id": 2,
            "group_id": 9,
            "round_id": 39,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 15,
                "position": 1,
                "score": 2,
                "result": "win"
            },
            "opponent2": {
                "id": 11,
                "position": 2,
                "score": 0,
                "result": "loss"
            }
        },
        {
            "id": 102,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 40,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 31,
                "position": 1,
                "score": 9,
                "result": "loss"
            },
            "opponent2": {
                "id": 7,
                "position": 2,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 103,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 41,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 14,
                "position": 1,
                "score": 16,
                "result": "win"
            },
            "opponent2": {
                "id": 30,
                "position": 2,
                "score": 10,
                "result": "loss"
            }
        },
        {
            "id": 104,
            "stage_id": 1,
            "group_id": 11,
            "round_id": 42,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 0,
                "position": 1,
                "score": 19,
                "result": "win"
            },
            "opponent2": {
                "id": 14,
                "position": 1,
                "score": 15,
                "result": "loss"
            }
        },
        {
            "id": 105,
            "stage_id": 2,
            "group_id": 10,
            "round_id": 43,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 11,
                "position": 1,
                "score": 14,
                "result": "loss"
            },
            "opponent2": {
                "id": 7,
                "position": 1,
                "score": 16,
                "result": "win"
            }
        },
        {
            "id": 106,
            "stage_id": 2,
            "group_id": 12,
            "round_id": 44,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 15,
                "position": 1,
                "score": 22,
                "result": "win"
            },
            "opponent2": {
                "id": 7,
                "position": 1,
                "score": 20,
                "result": "loss"
            }
        },
        {
            "id": 107,
            "stage_id": 1,
            "group_id": 13,
            "round_id": 45,
            "number": 1,
            "child_count": 0,
            "status": 4,
            "opponent1": {
                "id": 4,
                "position": 1,
                "score": 2,
                "result": "win"
            },
            "opponent2": {
                "id": 0,
                "position": 1,
                "score": 0,
                "result": "loss"
            }
        }
    ],
    "match_game": [],
    "participant": [
        {
            "id": 0,
            "name": "POCEBLO",
            "tournament_id": 0
        },
        {
            "id": 1,
            "name": "Team Claquée",
            "tournament_id": 0
        },
        {
            "id": 2,
            "name": "x0.25",
            "tournament_id": 0
        },
        {
            "id": 3,
            "name": "AWLESS",
            "tournament_id": 0
        },
        {
            "id": 4,
            "name": "PodiumOuRien",
            "tournament_id": 0
        },
        {
            "id": 5,
            "name": "SymbiOz",
            "tournament_id": 0
        },
        {
            "id": 6,
            "name": "Venture_eSport",
            "tournament_id": 0
        },
        {
            "id": 7,
            "name": "Getting Meuffed",
            "tournament_id": 0
        },
        {
            "id": 8,
            "name": "PipePingouin",
            "tournament_id": 0
        },
        {
            "id": 9,
            "name": "Legendary ESIEA Masters",
            "tournament_id": 0
        },
        {
            "id": 10,
            "name": "Mario Mousse",
            "tournament_id": 0
        },
        {
            "id": 11,
            "name": "ZOOLAND",
            "tournament_id": 0
        },
        {
            "id": 12,
            "name": "DOGinLaN",
            "tournament_id": 0
        },
        {
            "id": 13,
            "name": "sans pression",
            "tournament_id": 0
        },
        {
            "id": 14,
            "name": "ploxiFANS",
            "tournament_id": 0
        },
        {
            "id": 15,
            "name": "Y",
            "tournament_id": 0
        },
        {
            "id": 16,
            "name": "REDFOX",
            "tournament_id": 0
        },
        {
            "id": 17,
            "name": "Rxspect",
            "tournament_id": 0
        },
        {
            "id": 18,
            "name": "MAN IN WHITE",
            "tournament_id": 0
        },
        {
            "id": 19,
            "name": "UR1KAN",
            "tournament_id": 0
        },
        {
            "id": 20,
            "name": "Peaky Blinders",
            "tournament_id": 0
        },
        {
            "id": 21,
            "name": "EZ4K",
            "tournament_id": 0
        },
        {
            "id": 22,
            "name": "reDEAFusion",
            "tournament_id": 0
        },
        {
            "id": 23,
            "name": "Redblood",
            "tournament_id": 0
        },
        {
            "id": 24,
            "name": "KebaBEAST",
            "tournament_id": 0
        },
        {
            "id": 25,
            "name": "Carry me plz",
            "tournament_id": 0
        },
        {
            "id": 26,
            "name": "dogtrainers",
            "tournament_id": 0
        },
        {
            "id": 27,
            "name": "Olympe",
            "tournament_id": 0
        },
        {
            "id": 28,
            "name": "Retour Samedi ou Dimanche",
            "tournament_id": 0
        },
        {
            "id": 29,
            "name": "Just Dew It",
            "tournament_id": 0
        },
        {
            "id": 30,
            "name": "TIM WHULA",
            "tournament_id": 0
        },
        {
            "id": 31,
            "name": "OSBLK",
            "tournament_id": 0
        }
    ]
};

localStorage.setItem("tournament0", JSON.stringify(database));

const volverloAAgarar = JSON.parse(localStorage.getItem("tournament0"));



console.log(database.stage);
console.log(volverloAAgarar.stage);

window.bracketsViewer.render({
    stages: database.stage,
    matches: database.match,
    matchGames: database.match_game,
    participants: database.participant,
})